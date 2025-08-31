import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MessageItem from './MessageItem';

type Message = {
  id: string;
  text: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  timestamp: string;
  isOwnMessage: boolean;
  isArchived?: boolean;
};

type ChatScreenProps = {
  contact: {
    id: number;
    name: string;
    avatar: string;
    isHealthcare?: boolean;
    isCaregiver?: boolean;
    isFamily?: boolean;
    isSupport?: boolean;
    isFavorite?: boolean;
    isArchived?: boolean;
  };
  onBack: () => void;
  onToggleFavorite?: () => void;
  onArchiveChat?: () => void;
};

function ChatScreen({ contact, onBack, onToggleFavorite, onArchiveChat }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Good morning! How are you feeling today?',
      sender: {
        id: 'contact',
        name: contact.name,
        avatar: contact.avatar,
      },
      timestamp: '9:30 AM',
      isOwnMessage: false,
    },
    {
      id: '2',
      text: "I'm doing better today, thank you. The new medication seems to be helping with my pain.",
      sender: {
        id: 'user',
        name: 'You',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
      timestamp: '9:32 AM',
      isOwnMessage: true,
    },
    {
      id: '3',
      text: "That's wonderful to hear! Any side effects I should know about?",
      sender: {
        id: 'contact',
        name: contact.name,
        avatar: contact.avatar,
      },
      timestamp: '9:35 AM',
      isOwnMessage: false,
    },
    {
      id: '4',
      text: "Just a little drowsiness in the afternoon, but it's manageable.",
      sender: {
        id: 'user',
        name: 'You',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
      timestamp: '9:36 AM',
      isOwnMessage: true,
    },
    {
      id: '5',
      text: "That's a common side effect. Try taking it with food, that might help reduce the drowsiness.",
      sender: {
        id: 'contact',
        name: contact.name,
        avatar: contact.avatar,
      },
      timestamp: '9:38 AM',
      isOwnMessage: false,
    },
    {
      id: '6',
      text: "I'll try that. Thank you for the advice!",
      sender: {
        id: 'user',
        name: 'You',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
      timestamp: '9:40 AM',
      isOwnMessage: true,
    },
    {
      id: '7',
      text: 'Your next check-up is scheduled for Friday at 10 AM. Would you like me to send you a reminder the day before?',
      sender: {
        id: 'contact',
        name: contact.name,
        avatar: contact.avatar,
      },
      timestamp: '9:42 AM',
      isOwnMessage: false,
    },
  ]);

  const [messageText, setMessageText] = useState('');
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const messageListRef = useRef<ScrollView>(null);

  // Scroll to bottom of message list
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    if (editingMessageId) {
      // Update existing message
      setMessages(
        messages.map((message) =>
          message.id === editingMessageId
            ? {
                ...message,
                text: messageText,
              }
            : message,
        ),
      );
      setEditingMessageId(null);
    } else {
      // Add new message
      const newMessage: Message = {
        id: Date.now().toString(),
        text: messageText,
        sender: {
          id: 'user',
          name: 'You',
          avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        },
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        isOwnMessage: true,
      };
      setMessages([...messages, newMessage]);
    }
    setMessageText('');
  };

  const handleEditMessage = (messageId: string) => {
    const messageToEdit = messages.find((m) => m.id === messageId);
    if (messageToEdit) {
      setMessageText(messageToEdit.text);
      setEditingMessageId(messageId);
    }
  };

  const handleDeleteMessage = (messageId: string) => {
    console.log('Deleting message:', messageId);
    setMessages(messages.filter((message) => message.id !== messageId));
    if (editingMessageId === messageId) {
      setEditingMessageId(null);
      setMessageText('');
    }
  };

  const handleArchiveMessage = (messageId: string) => {
    console.log('Archiving message:', messageId);
    setMessages(
      messages.map((message) =>
        message.id === messageId
          ? {
              ...message,
              isArchived: true,
            }
          : message,
      ),
    );
  };

  const handleArchiveChat = () => {
    console.log('Archive chat clicked!');
    if (onArchiveChat) {
      onArchiveChat();
    }
    setShowMenu(false);
  };

  const handleToggleFavorite = () => {
    console.log('Toggle favorite clicked!');
    if (onToggleFavorite) {
      onToggleFavorite();
    }
    setShowMenu(false);
  };

  const handleDeleteChat = () => {
    console.log('Delete chat clicked!');
    setShowMenu(false);
    onBack();
  };

  const handleVideoCall = () => {
    console.log('Initiating video call with', contact.name);
  };

  const handleAudioCall = () => {
    console.log('Initiating audio call with', contact.name);
  };

  const getStatusText = () => {
    if (contact.isHealthcare) return 'Available';
    if (contact.isCaregiver) return 'On duty';
    if (contact.isFamily) return 'Online';
    if (contact.isSupport) return 'Online';
    return 'Online';
  };

  const getStatusColor = () => {
    if (contact.isHealthcare) return '#10B981'; // green
    if (contact.isCaregiver) return '#4491B1'; // blue
    if (contact.isFamily) return '#10B981'; // green
    if (contact.isSupport) return '#8B5CF6'; // purple
    return '#10B981'; // green
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#6B7280" />
        </TouchableOpacity>
        
        <View style={styles.contactInfo}>
          <Image
            source={{ uri: contact.avatar }}
            style={styles.contactAvatar}
          />
          <View style={styles.contactDetails}>
            <Text style={styles.contactName}>{contact.name}</Text>
            <Text style={[styles.contactStatus, { color: getStatusColor() }]}>
              {getStatusText()}
            </Text>
          </View>
        </View>
        
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.callButton} onPress={handleVideoCall}>
            <Ionicons name="videocam" size={24} color="#6B7280" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.callButton} onPress={handleAudioCall}>
            <Ionicons name="call" size={24} color="#6B7280" />
          </TouchableOpacity>
          
          <View style={styles.menuContainer}>
            <TouchableOpacity 
              style={[styles.moreButton, showMenu && styles.moreButtonActive]} 
              onPress={() => {
                console.log('Menu button clicked! Current state:', showMenu);
                setShowMenu(!showMenu);
              }}
              activeOpacity={0.7}
            >
              <Ionicons 
                name="ellipsis-vertical" 
                size={24} 
                color={showMenu ? "#4491B1" : "#6B7280"} 
              />
            </TouchableOpacity>
            
            {showMenu && (
              <View style={styles.menuDropdown}>
                <View style={styles.debugIndicator}>
                  <Text style={styles.debugText}>Menu is open!</Text>
                </View>
                <TouchableOpacity 
                  style={styles.menuItem} 
                  onPress={handleToggleFavorite}
                  activeOpacity={0.7}
                >
                  <Ionicons 
                    name={contact.isFavorite ? "star" : "star-outline"} 
                    size={20} 
                    color={contact.isFavorite ? "#F59E0B" : "#6B7280"} 
                  />
                  <Text style={styles.menuItemText}>
                    {contact.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.menuItem} 
                  onPress={handleArchiveChat}
                  activeOpacity={0.7}
                >
                  <Ionicons 
                    name="archive-outline" 
                    size={20} 
                    color="#6B7280" 
                  />
                  <Text style={styles.menuItemText}>
                    {contact.isArchived ? 'Unarchive Chat' : 'Archive Chat'}
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.menuItem} 
                  onPress={handleDeleteChat}
                  activeOpacity={0.7}
                >
                  <Ionicons 
                    name="trash-outline" 
                    size={20} 
                    color="#EF4444" 
                  />
                  <Text style={[styles.menuItemText, { color: '#EF4444' }]}>
                    Delete Chat
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Message List */}
      <ScrollView
        ref={messageListRef}
        style={styles.messageList}
        contentContainerStyle={styles.messageListContent}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            onEdit={() => handleEditMessage(message.id)}
            onDelete={() => handleDeleteMessage(message.id)}
            onArchive={() => handleArchiveMessage(message.id)}
          />
        ))}
      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            value={messageText}
            onChangeText={setMessageText}
            placeholder="Type a message..."
            placeholderTextColor="#9CA3AF"
            multiline
            maxLength={500}
          />
          
          <View style={styles.inputActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="attach" size={24} color="#6B7280" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="mic" size={24} color="#6B7280" />
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.sendButton, !messageText.trim() && styles.sendButtonDisabled]}
              onPress={handleSendMessage}
              disabled={!messageText.trim()}
            >
              <Ionicons name="send" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        
        {editingMessageId && (
          <View style={styles.editingIndicator}>
            <Text style={styles.editingText}>Editing message...</Text>
            <TouchableOpacity
              onPress={() => {
                setEditingMessageId(null);
                setMessageText('');
              }}
            >
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#fff',
    zIndex: 1000,
    elevation: 5,
  },
  backButton: {
    padding: 8,
    marginRight: 12,
    borderRadius: 20,
  },
  contactInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  contactDetails: {
    marginLeft: 12,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  contactStatus: {
    fontSize: 12,
    fontWeight: '500',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1001,
  },
  callButton: {
    padding: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  menuContainer: {
    position: 'relative',
    zIndex: 1000,
  },
  moreButton: {
    padding: 8,
    borderRadius: 20,
  },
  moreButtonActive: {
    backgroundColor: '#F3F4F6',
  },
  menuDropdown: {
    position: 'absolute',
    top: 50,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    minWidth: 200,
    zIndex: 9999,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 4,
    marginVertical: 2,
  },
  menuItemText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 12,
    fontWeight: '500',
  },
  debugIndicator: {
    backgroundColor: '#FEF3C7',
    padding: 8,
    marginBottom: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  debugText: {
    fontSize: 12,
    color: '#92400E',
    fontWeight: '600',
  },
  messageList: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  messageListContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  inputWrapper: {
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    maxHeight: 100,
    paddingVertical: 8,
  },
  inputActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  actionButton: {
    padding: 8,
    marginRight: 4,
    borderRadius: 20,
  },
  sendButton: {
    backgroundColor: '#4491B1',
    padding: 8,
    borderRadius: 20,
  },
  sendButtonDisabled: {
    backgroundColor: '#D1D5DB',
  },
  editingIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 4,
  },
  editingText: {
    fontSize: 14,
    color: '#4491B1',
  },
  cancelButton: {
    fontSize: 14,
    color: '#4491B1',
    textDecorationLine: 'underline',
  },
});

export default ChatScreen; 