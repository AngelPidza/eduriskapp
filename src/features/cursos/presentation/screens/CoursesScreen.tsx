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
import { useCoursesStore } from '../providers/coursesStore';

export const CoursesScreen: React.FC = () => {
  const { courses, isLoading, fetchCourses } = useCoursesStore();

  useEffect(() => {
    fetchCourses();
  }, []);

  if (isLoading) {
    return (
      <AppLayout title="Cursos">
        <ActivityIndicator size="large" color={colors.primary} />
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Cursos">
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseCard}>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseTeacher}>{item.teacher}</Text>
            <Text style={styles.courseSchedule}>{item.schedule}</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${item.progress}%` },
                  ]}
                />
              </View>
              <Text style={styles.progressText}>{item.progress}%</Text>
            </View>
            {item.grade !== undefined && (
              <Text style={styles.grade}>Nota: {item.grade}</Text>
            )}
          </View>
        )}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  courseCard: {
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
    fontSize: 18,
    fontWeight: '900',
    color: colors.text,
  },
  courseTeacher: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  courseSchedule: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 4,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 999,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 999,
  },
  progressText: {
    marginLeft: 8,
    fontSize: 12,
    color: colors.textSecondary,
  },
  grade: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: colors.success,
  },
});
