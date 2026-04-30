import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { colors } from '../../../../core/theme/colors';
import { AppLayout } from '../../../../shared/components/AppLayout';
import { useAlertsStore } from '../providers/alertsStore';
import { AlertEntity } from '../../domain/entities/AlertEntity';

const alertTypeColors = {
  warning: colors.warningLight,
  info: colors.infoLight,
  urgent: colors.errorLight,
};

const alertTypeBorderColors = {
  warning: colors.warning,
  info: colors.info,
  urgent: colors.error,
};

export const AlertsScreen: React.FC = () => {
  const { alerts, isLoading, fetchAlerts, markAsRead } = useAlertsStore();

  useEffect(() => {
    fetchAlerts();
  }, []);

  if (isLoading) {
    return (
      <AppLayout title="Alertas">
        <ActivityIndicator size="large" color={colors.primary} />
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Alertas">
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: AlertEntity }) => (
          <Pressable
            style={[
              styles.alertCard,
              {
                backgroundColor: alertTypeColors[item.type],
                borderColor: alertTypeBorderColors[item.type],
              },
            ]}
            onPress={() => markAsRead(item.id)}
          >
            <Text style={styles.alertTitle}>{item.title}</Text>
            <Text style={styles.alertMessage}>{item.message}</Text>
            {!item.isRead && <View style={styles.unreadDot} />}
          </Pressable>
        )}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  alertCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.text,
  },
  alertMessage: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  unreadDot: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});
