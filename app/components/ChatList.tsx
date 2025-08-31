import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ChatItem from './ChatItem';
import ChatScreen from './ChatScreen';

type TabType = 'messages' | 'archived' | 'calls';

type ChatListProps = {
  onNavigateToHome?: () => void;
};

function ChatList({ onNavigateToHome }: ChatListProps) {
  const [activeTab, setActiveTab] = useState<TabType>('messages');
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      lastMessage:
        'Your medication has been prescribed. Please let me know if you have any questions.',
      timestamp: '10:30 AM',
      unread: 2,
      isHealthcare: true,
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Michael (Caregiver)',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      lastMessage: "I'll be there at 3pm today for our regular session.",
      timestamp: 'Yesterday',
      unread: 0,
      isCaregiver: true,
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Emily (Daughter)',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      lastMessage: 'Hi Mom! Just checking in. How are you feeling today?',
      timestamp: 'Yesterday',
      unread: 1,
      isFamily: true,
      isFavorite: true,
    },
    {
      id: 4,
      name: 'Support Team',
      avatar: 'https://randomuser.me/api/portraits/lego/5.jpg',
      lastMessage: 'Your appointment has been confirmed for Friday at 2:00 PM.',
      timestamp: 'Monday',
      unread: 0,
      isSupport: true,
      isFavorite: false,
    },
    {
      id: 5,
      name: 'Robert (Son)',
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
      lastMessage: "I'll come visit this weekend with the grandkids!",
      timestamp: 'Monday',
      unread: 0,
      isFamily: true,
      isFavorite: false,
    },
  ]);

  const [archivedConversations, setArchivedConversations] = useState([
    {
      id: 6,
      name: 'Pharmacy',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      lastMessage: 'Your prescription is ready for pickup.',
      timestamp: 'Last week',
      unread: 0,
      isHealthcare: true,
      isFavorite: false,
    },
    {
      id: 7,
      name: 'Jane (Nurse)',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      lastMessage: 'Your vitals looked good today. Keep up the good work!',
      timestamp: '2 weeks ago',
      unread: 0,
      isHealthcare: true,
      isFavorite: false,
    },
  ]);

  const callHistory = [
    {
      id: 101,
      name: 'Dr. Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      lastMessage: 'Outgoing call • 5 mins',
      timestamp: 'Today, 9:15 AM',
      isHealthcare: true,
      isFavorite: true,
      isCall: true,
    },
    {
      id: 102,
      name: 'Emily (Daughter)',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      lastMessage: 'Incoming call • 12 mins',
      timestamp: 'Yesterday, 6:30 PM',
      isFamily: true,
      isFavorite: true,
      isCall: true,
    },
    {
      id: 103,
      name: 'Michael (Caregiver)',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      lastMessage: 'Missed call',
      timestamp: 'Yesterday, 2:45 PM',
      isCaregiver: true,
      isFavorite: false,
      isCall: true,
      isMissed: true,
    },
  ];

  // Function to handle favorite toggle
  const handleToggleFavorite = (contactId: number) => {
    setConversations(prevConversations =>
      prevConversations.map(conv =>
        conv.id === contactId
          ? { ...conv, isFavorite: !conv.isFavorite }
          : conv
      )
    );
    setArchivedConversations(prevArchived =>
      prevArchived.map(conv =>
        conv.id === contactId
          ? { ...conv, isFavorite: !conv.isFavorite }
          : conv
      )
    );
  };

  // Function to handle archive/unarchive
  const handleArchiveChat = (contactId: number) => {
    // Find the contact in conversations
    const contactInMain = conversations.find(conv => conv.id === contactId);
    if (contactInMain) {
      // Move from main to archived
      setConversations(prev => prev.filter(conv => conv.id !== contactId));
      const contactToArchive = {
        ...contactInMain,
        isArchived: true
      };
      setArchivedConversations(prev => [...prev, contactToArchive]);
    } else {
      // Find the contact in archived
      const contactInArchived = archivedConversations.find(conv => conv.id === contactId);
      if (contactInArchived) {
        // Move from archived to main
        setArchivedConversations(prev => prev.filter(conv => conv.id !== contactId));
        const contactToUnarchive = {
          ...contactInArchived,
          isArchived: false
        };
        setConversations(prev => [...prev, contactToUnarchive]);
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'messages':
        return (
          <View style={styles.tabContent}>
            {conversations.map((conversation) => (
              <ChatItem 
                key={conversation.id} 
                conversation={conversation}
                onPress={() => setSelectedContact(conversation)}
                onFavoritePress={() => handleToggleFavorite(conversation.id)}
              />
            ))}
          </View>
        );
      case 'archived':
        return (
          <View style={styles.tabContent}>
            {archivedConversations.map((conversation) => (
              <ChatItem 
                key={conversation.id} 
                conversation={conversation}
                onPress={() => setSelectedContact(conversation)}
                onFavoritePress={() => handleToggleFavorite(conversation.id)}
              />
            ))}
          </View>
        );
      case 'calls':
        return (
          <View style={styles.tabContent}>
            {callHistory.map((call) => (
              <ChatItem 
                key={call.id} 
                conversation={call}
                onPress={() => setSelectedContact(call)}
              />
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  // If a contact is selected, show the chat screen
  if (selectedContact) {
    return (
      <ChatScreen
        contact={selectedContact}
        onBack={() => setSelectedContact(null)}
        onToggleFavorite={() => handleToggleFavorite(selectedContact.id)}
        onArchiveChat={() => handleArchiveChat(selectedContact.id)}
      />
    );
  }



  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.backButton} onPress={onNavigateToHome}>
              <Ionicons name="arrow-back" size={24} color="#6B7280" />
            </TouchableOpacity>
            <Text style={styles.title}>Messages</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="add-circle" size={28} color="#4491B1" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chatbubble-ellipses" size={28} color="#4491B1" />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#6B7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search messages"
            placeholderTextColor="#9CA3AF"
          />
        </View>
        
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'messages' && styles.activeTab]}
            onPress={() => setActiveTab('messages')}
          >
            <Ionicons name="chatbubble-ellipses" size={20} color={activeTab === 'messages' ? '#4491B1' : '#6B7280'} />
            <Text style={[styles.tabText, activeTab === 'messages' && styles.activeTabText]}>Chats</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, activeTab === 'archived' && styles.activeTab]}
            onPress={() => setActiveTab('archived')}
          >
            <Ionicons name="archive" size={20} color={activeTab === 'archived' ? '#4491B1' : '#6B7280'} />
            <Text style={[styles.tabText, activeTab === 'archived' && styles.activeTabText]}>Archived</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, activeTab === 'calls' && styles.activeTab]}
            onPress={() => setActiveTab('calls')}
          >
            <Ionicons name="call" size={20} color={activeTab === 'calls' ? '#4491B1' : '#6B7280'} />
            <Text style={[styles.tabText, activeTab === 'calls' && styles.activeTabText]}>Calls</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Tab Content */}
      <ScrollView style={styles.scrollView}>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
    borderRadius: 20,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
    zIndex: 1,
  },
  searchInput: {
    width: '100%',
    paddingVertical: 12,
    paddingLeft: 48,
    paddingRight: 16,
    fontSize: 18,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4491B1',
  },
  tabText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#6B7280',
    marginLeft: 8,
  },
  activeTabText: {
    color: '#4491B1',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  tabContent: {
    paddingHorizontal: 16,
  },
});

export default ChatList; 