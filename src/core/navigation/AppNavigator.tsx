import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LoginScreen } from '../../features/auth/presentation/screens/LoginScreen';
import { DashboardScreen } from '../../features/dashboard/presentation/screens/DashboardScreen';
import { CoursesScreen } from '../../features/cursos/presentation/screens/CoursesScreen';
import { AlertsScreen } from '../../features/alertas/presentation/screens/AlertsScreen';
import { RegistroScreen } from '../../features/registro/presentation/screens/RegistroScreen';
import { ConfigScreen } from '../../features/configuracion/presentation/screens/ConfigScreen';
import { useAuthStore } from '../../features/auth/presentation/providers/authStore';
import { colors } from '../theme/colors';

export type RootStackParamList = {
  Login: undefined;
  AppTabs: undefined;
  Registro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
type AppTabParamList = {
  Dashboard: undefined;
  Courses: undefined;
  Alerts: undefined;
  Config: undefined;
};
const Tabs = createBottomTabNavigator<AppTabParamList>();

const AppTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          marginHorizontal: 44,
          bottom: 24,
          backgroundColor: colors.surface2,
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.14)',
          borderRadius: 22,
          height: 66,
          paddingTop: 8,
          paddingBottom: 10,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOpacity: 0.22,
          shadowRadius: 18,
          shadowOffset: { width: 0, height: 12 },
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          letterSpacing: 0.2,
        },
        tabBarIcon: ({ color, size, focused }) => {
          const iconSize = Math.max(18, Math.min(24, size));
          let name: keyof typeof Ionicons.glyphMap = 'grid-outline';

          if (route.name === 'Dashboard') {
            name = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Courses') {
            name = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Alerts') {
            name = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Config') {
            name = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={name} size={iconSize} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: 'Inicio' }}
      />
      <Tabs.Screen
        name="Courses"
        component={CoursesScreen}
        options={{ title: 'Cursos' }}
      />
      <Tabs.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{ title: 'Alertas' }}
      />
      <Tabs.Screen
        name="Config"
        component={ConfigScreen}
        options={{ title: 'Config' }}
      />
    </Tabs.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        key={user ? 'app' : 'auth'}
        initialRouteName={user ? 'AppTabs' : 'Login'}
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <>
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="AppTabs" component={AppTabs} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
