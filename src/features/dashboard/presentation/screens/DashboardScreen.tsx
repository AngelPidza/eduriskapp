import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { colors } from '../../../../core/theme/colors';
import { AppLayout } from '../../../../shared/components/AppLayout';
import { useDashboardStore } from '../providers/dashboardStore';
import { StatEntity } from '../../domain/entities/StatEntity';

export const DashboardScreen: React.FC = () => {
  const { stats, activities, isLoading, fetchDashboard, error } =
    useDashboardStore();

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (isLoading) {
    return (
      <AppLayout title="Dashboard">
        <ActivityIndicator size="large" color={colors.primary} />
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Dashboard">
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor={colors.primary}
            refreshing={isLoading}
            onRefresh={fetchDashboard}
          />
        }
      >
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Resumen de hoy</Text>
          <Text style={styles.heroSubtitle}>
            Tu progreso, alertas y próximos pendientes en un vistazo.
          </Text>
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>

        <Text style={styles.sectionTitle}>Indicadores</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.kpiRow}
        >
          {stats.length === 0 ? (
            <>
              <View style={[styles.kpiCard, styles.kpiSkeleton]} />
              <View style={[styles.kpiCard, styles.kpiSkeleton]} />
              <View style={[styles.kpiCard, styles.kpiSkeleton]} />
            </>
          ) : (
            stats.map((stat: StatEntity) => (
              <View key={stat.id} style={styles.kpiCard}>
                <Text style={styles.kpiLabel}>{stat.label}</Text>
                <Text style={styles.kpiValue}>
                  {stat.value}
                  {stat.unit}
                </Text>
              </View>
            ))
          )}
        </ScrollView>

        <View style={styles.grid}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelTitle}>Tendencia (demo)</Text>
              <Text style={styles.panelHint}>Últimos 7 días</Text>
            </View>
            <View style={styles.chartFake}>
              <View style={[styles.chartLine, { width: '78%' }]} />
              <View style={[styles.chartLine, { width: '60%' }]} />
              <View style={[styles.chartLine, { width: '88%' }]} />
            </View>
          </View>

          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelTitle}>Pendientes</Text>
              <Text style={styles.panelHint}>Esta semana</Text>
            </View>
            <View style={styles.todoRow}>
              <View style={styles.todoDot} />
              <Text style={styles.todoText}>Revisar tareas por vencer</Text>
            </View>
            <View style={styles.todoRow}>
              <View style={[styles.todoDot, { backgroundColor: colors.info }]} />
              <Text style={styles.todoText}>Consultar alertas nuevas</Text>
            </View>
            <View style={styles.todoRow}>
              <View
                style={[styles.todoDot, { backgroundColor: colors.success }]}
              />
              <Text style={styles.todoText}>Actualizar asistencia</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Actividad reciente</Text>
          <Text style={styles.sectionHint}>Últimas novedades</Text>
        </View>
        {activities.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Sin actividad por ahora</Text>
            <Text style={styles.emptySubtitle}>
              Cuando haya cambios (notas, tareas o alertas), aparecerán aquí.
            </Text>
          </View>
        ) : (
          <FlatList
            data={activities}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.activityCard}>
                <Text style={styles.activityTitle}>{item.title}</Text>
                <Text style={styles.activityDescription}>
                  {item.description}
                </Text>
              </View>
            )}
          />
        )}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
    marginTop: 6,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: 0.2,
  },
  heroSubtitle: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 18,
    color: colors.textSecondary,
  },
  errorText: {
    marginTop: 10,
    color: colors.error,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    marginTop: 4,
  },
  sectionHint: {
    marginTop: -2,
    marginBottom: 6,
    color: colors.textLight,
    fontSize: 12,
    fontWeight: '600',
  },
  kpiRow: {
    gap: 12,
    paddingRight: 6,
  },
  kpiCard: {
    width: 190,
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  kpiSkeleton: {
    opacity: 0.55,
    backgroundColor: colors.surface2,
  },
  kpiLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '700',
  },
  kpiValue: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: 0.2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
  panel: {
    flexGrow: 1,
    flexBasis: '48%',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  panelHeader: {
    marginBottom: 10,
  },
  panelTitle: {
    color: colors.text,
    fontWeight: '900',
  },
  panelHint: {
    marginTop: 2,
    color: colors.textLight,
    fontSize: 12,
    fontWeight: '600',
  },
  chartFake: {
    gap: 10,
    paddingTop: 6,
  },
  chartLine: {
    height: 10,
    borderRadius: 999,
    backgroundColor: 'rgba(79, 125, 255, 0.28)',
    borderWidth: 1,
    borderColor: 'rgba(79, 125, 255, 0.35)',
  },
  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  todoDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.warning,
  },
  todoText: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },
  activityCard: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  activityDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  emptyCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  emptyTitle: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 14,
  },
  emptySubtitle: {
    marginTop: 6,
    color: colors.textSecondary,
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16,
  },
  bottomSpacer: {
    height: 12,
  },
});
