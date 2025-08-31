import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MessageProps = {
  message: {
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
  onEdit: () => void;
  onDelete: () => void;
  onArchive: () => void;
};

function MessageItem({
  message,
  onEdit,
  onDelete,
  onArchive,
}: MessageProps) {
  const [showActions, setShowActions] = useState(false);

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Message',
      'Are you sure you want to delete this message?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            onDelete();
            setShowActions(false);
          },
        },
      ]
    );
  };

  const handleArchive = () => {
    Alert.alert(
      'Archive Message',
      'Are you sure you want to archive this message?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Archive',
          onPress: () => {
            onArchive();
            setShowActions(false);
          },
        },
      ]
    );
  };

  return (
    <View
      style={[
        styles.container,
        message.isOwnMessage ? styles.ownMessage : styles.otherMessage,
        message.isArchived && styles.archivedMessage,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          message.isOwnMessage ? styles.ownBubble : styles.otherBubble,
        ]}
      >
        {/* Message header for other person's messages */}
        {!message.isOwnMessage && (
          <View style={styles.messageHeader}>
            <Image
              source={{ uri: message.sender.avatar }}
              style={styles.senderAvatar}
            />
            <Text style={styles.senderName}>{message.sender.name}</Text>
          </View>
        )}

        {/* Message content */}
        <Text
          style={[
            styles.messageText,
            message.isOwnMessage ? styles.ownMessageText : styles.otherMessageText,
          ]}
        >
          {message.text}
          {message.isArchived && (
            <View style={styles.archivedIndicator}>
              <Ionicons name="archive" size={14} color="#6B7280" />
              <Text style={styles.archivedText}> Archived</Text>
            </View>
          )}
        </Text>

        {/* Message footer */}
        <View
          style={[
            styles.messageFooter,
            message.isOwnMessage ? styles.ownFooter : styles.otherFooter,
          ]}
        >
          <Text
            style={[
              styles.timestamp,
              message.isOwnMessage ? styles.ownTimestamp : styles.otherTimestamp,
            ]}
          >
            {message.timestamp}
          </Text>
          {message.isOwnMessage && (
            <View style={styles.readIndicator}>
              <Ionicons name="checkmark" size={14} color="#A8D1E8" />
            </View>
          )}
        </View>

        {/* Message actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={toggleActions}
            style={[
              styles.actionButton,
              message.isOwnMessage ? styles.ownActionButton : styles.otherActionButton,
            ]}
          >
            <Ionicons name="ellipsis-vertical" size={16} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Actions menu */}
        {showActions && (
          <View style={styles.actionsMenu}>
            {/* For sender messages (your messages) - show Edit, Archive, Delete */}
            {message.isOwnMessage && (
              <>
                <TouchableOpacity
                  style={styles.actionMenuItem}
                  onPress={() => {
                    onEdit();
                    setShowActions(false);
                  }}
                >
                  <Ionicons name="create" size={16} color="#6B7280" style={styles.actionIcon} />
                  <Text style={styles.actionText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.actionMenuItem}
                  onPress={handleArchive}
                >
                  <Ionicons name="archive" size={16} color="#6B7280" style={styles.actionIcon} />
                  <Text style={styles.actionText}>Archive</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.actionMenuItem}
                  onPress={handleDelete}
                >
                  <Ionicons name="trash" size={16} color="#EF4444" style={styles.actionIcon} />
                  <Text style={[styles.actionText, styles.deleteText]}>Delete</Text>
                </TouchableOpacity>
              </>
            )}

            {/* For receiver messages (incoming messages) - only show Delete */}
            {!message.isOwnMessage && (
              <TouchableOpacity
                style={styles.actionMenuItem}
                onPress={handleDelete}
              >
                <Ionicons name="trash" size={16} color="#EF4444" style={styles.actionIcon} />
                <Text style={[styles.actionText, styles.deleteText]}>Delete</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  ownMessage: {
    alignItems: 'flex-end',
  },
  otherMessage: {
    alignItems: 'flex-start',
  },
  archivedMessage: {
    opacity: 0.6,
  },
  messageBubble: {
    maxWidth: '80%',
    borderRadius: 20,
    padding: 12,
    position: 'relative',
  },
  ownBubble: {
    backgroundColor: '#4491B1',
    borderBottomRightRadius: 4,
  },
  otherBubble: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  senderAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  senderName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  ownMessageText: {
    color: '#fff',
  },
  otherMessageText: {
    color: '#111827',
  },
  archivedIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  archivedText: {
    fontSize: 12,
    color: '#6B7280',
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  ownFooter: {
    justifyContent: 'flex-end',
  },
  otherFooter: {
    justifyContent: 'flex-start',
  },
  timestamp: {
    fontSize: 12,
  },
  ownTimestamp: {
    color: '#A8D1E8',
  },
  otherTimestamp: {
    color: '#6B7280',
  },
  readIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4,
  },
  actionsContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  actionButton: {
    padding: 4,
    borderRadius: 12,
  },
  ownActionButton: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
  },
  otherActionButton: {
    backgroundColor: 'rgba(107, 114, 128, 0.1)',
  },
  actionsMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 1000,
    minWidth: 120,
  },
  actionMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  actionIcon: {
    marginRight: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#6B7280',
  },
  deleteText: {
    color: '#EF4444',
  },
});

export default MessageItem; 