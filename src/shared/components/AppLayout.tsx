import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../../core/theme/colors';
import { AppHeader } from './AppHeader';

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  showHeader?: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  title,
  showHeader = true,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {showHeader && title && <AppHeader title={title} />}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
});
