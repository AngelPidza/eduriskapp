import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { colors } from '../../../../core/theme/colors';
import { AppLayout } from '../../../../shared/components/AppLayout';
import { useConfigStore } from '../providers/configStore';
import { useAuthStore } from '../../../auth/presentation/providers/authStore';

export const ConfigScreen: React.FC = () => {
  const { profile, isLoading, fetchProfile } = useConfigStore();
  const { logout } = useAuthStore();

  useEffect(() => {
    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <AppLayout title="Configuración">
        <ActivityIndicator size="large" color={colors.primary} />
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Configuración">
      {profile && (
        <View style={styles.profileSection}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
          <Text style={styles.role}>{profile.role}</Text>
        </View>
      )}

      <Pressable
        onPress={logout}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </Pressable>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.text,
  },
  email: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 4,
  },
  role: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 8,
    textTransform: 'capitalize',
  },
  button: {
    backgroundColor: colors.error,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  buttonPressed: {
    transform: [{ scale: 0.99 }],
    opacity: 0.92,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.2,
  },
});
