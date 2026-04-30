import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../../../../core/theme/colors';
import { AppLayout } from '../../../../shared/components/AppLayout';
import { useRegistroStore } from '../providers/registroStore';

export const RegistroScreen: React.FC = () => {
  const { grades, isLoading, fetchGrades } = useRegistroStore();

  useEffect(() => {
    fetchGrades();
  }, []);

  if (isLoading) {
    return (
      <AppLayout title="Registro de Calificaciones">
        <ActivityIndicator size="large" color={colors.primary} />
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Registro de Calificaciones">
      <FlatList
        data={grades}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gradeCard}>
            <Text style={styles.courseName}>{item.course}</Text>
            <Text style={styles.assignment}>{item.assignment}</Text>
            <View style={styles.gradeRow}>
              <Text style={styles.gradeValue}>
                {item.grade}/{item.maxGrade}
              </Text>
              <Text style={styles.teacher}>{item.teacher}</Text>
            </View>
          </View>
        )}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  gradeCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  courseName: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.text,
  },
  assignment: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  gradeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  gradeValue: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.primary,
  },
  teacher: {
    fontSize: 12,
    color: colors.textLight,
  },
});
