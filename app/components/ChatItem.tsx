import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Conversation = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
  isHealthcare?: boolean;
  isCaregiver?: boolean;
  isFamily?: boolean;
  isSupport?: boolean;
  isFavorite?: boolean;
  isCall?: boolean;
  isMissed?: boolean;
};

type ChatItemProps = {
  conversation: Conversation;
  onPress: () => void;
  onFavoritePress?: () => void;
};

function ChatItem({ conversation, onPress, onFavoritePress }: ChatItemProps) {
  // Determine which icon to show based on the contact type
  const getTypeIcon = () => {
    if (conversation.isHealthcare) {
      return <Ionicons name="heart" size={16} color="#EF4444" />;
    } else if (conversation.isCaregiver) {
      return <Ionicons name="person" size={16} color="#4491B1" />;
    } else if (conversation.isFamily) {
      return <Ionicons name="people" size={16} color="#10B981" />;
    } else if (conversation.isSupport) {
      return <Ionicons name="help-circle" size={16} color="#8B5CF6" />;
    }
    return null;
  };

  // Determine call icon for call history items
  const getCallIcon = () => {
    if (!conversation.isCall) return null;
    if (conversation.isMissed) {
      return <Ionicons name="call" size={20} color="#EF4444" style={styles.callIcon} />;
    } else if (conversation.lastMessage?.includes('Incoming')) {
      return <Ionicons name="call" size={20} color="#10B981" style={styles.callIcon} />;
    } else {
      return <Ionicons name="call" size={20} color="#4491B1" style={styles.callIcon} />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: conversation.avatar }}
          style={styles.avatar}
        />
        <View style={styles.typeIconContainer}>
          {getTypeIcon()}
        </View>
      </View>
      
      {/* Content */}
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{conversation.name}</Text>
          <Text style={styles.timestamp}>{conversation.timestamp}</Text>
        </View>
        <View style={styles.messageRow}>
          {getCallIcon()}
          <Text
            style={[
              styles.lastMessage,
              conversation.isMissed && styles.missedCall
            ]}
            numberOfLines={1}
          >
            {conversation.lastMessage}
          </Text>
        </View>
      </View>
      
      {/* Action buttons */}
      <View style={styles.actions}>
        {/* Favorite button */}
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={(e) => {
            e.stopPropagation();
            if (onFavoritePress) {
              onFavoritePress();
            }
          }}
        >
          <Ionicons
            name={conversation.isFavorite ? "star" : "star-outline"}
            size={22}
            color={conversation.isFavorite ? "#FBBF24" : "#D1D5DB"}
          />
        </TouchableOpacity>
        
        {/* Unread indicator */}
        {conversation.unread && conversation.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{conversation.unread}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  typeIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 2,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  timestamp: {
    fontSize: 14,
    color: '#6B7280',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callIcon: {
    marginRight: 8,
  },
  lastMessage: {
    fontSize: 16,
    color: '#4B5563',
    flex: 1,
  },
  missedCall: {
    color: '#EF4444',
  },
  actions: {
    alignItems: 'center',
    marginLeft: 8,
  },
  favoriteButton: {
    padding: 4,
    marginBottom: 8,
  },
  unreadBadge: {
    backgroundColor: '#4491B1',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ChatItem; 