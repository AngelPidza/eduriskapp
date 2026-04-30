edurisk/
├── app.json
├── package.json
├── tsconfig.json
├── babel.config.js
├── src/
│   ├── core/
│   │   ├── theme/colors.ts
│   │   └── navigation/AppNavigator.tsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── domain/entities/UserEntity.ts
│   │   │   ├── domain/repositories/AuthRepository.ts
│   │   │   ├── domain/usecases/LoginUseCase.ts
│   │   │   ├── data/models/UserModel.ts
│   │   │   ├── data/repositories/AuthRepositoryImpl.ts
│   │   │   └── presentation/
│   │   │       ├── providers/authStore.ts
│   │   │       └── screens/LoginScreen.tsx
│   │   ├── dashboard/
│   │   │   ├── domain/entities/StatEntity.ts
│   │   │   ├── domain/entities/ActivityEntity.ts
│   │   │   ├── domain/repositories/DashboardRepository.ts
│   │   │   ├── domain/usecases/GetDashboardUseCase.ts
│   │   │   ├── data/repositories/DashboardRepositoryImpl.ts
│   │   │   └── presentation/
│   │   │       ├── providers/dashboardStore.ts
│   │   │       └── screens/DashboardScreen.tsx
│   │   ├── cursos/
│   │   │   ├── domain/entities/CourseEntity.ts
│   │   │   ├── domain/repositories/CoursesRepository.ts
│   │   │   ├── domain/usecases/GetCoursesUseCase.ts
│   │   │   ├── data/repositories/CoursesRepositoryImpl.ts
│   │   │   └── presentation/
│   │   │       ├── providers/coursesStore.ts
│   │   │       └── screens/CoursesScreen.tsx
│   │   ├── alertas/
│   │   │   ├── domain/entities/AlertEntity.ts
│   │   │   ├── domain/repositories/AlertsRepository.ts
│   │   │   ├── domain/usecases/GetAlertsUseCase.ts
│   │   │   ├── data/repositories/AlertsRepositoryImpl.ts
│   │   │   └── presentation/
│   │   │       ├── providers/alertsStore.ts
│   │   │       └── screens/AlertsScreen.tsx
│   │   ├── registro/
│   │   │   ├── domain/entities/StudentGradeEntity.ts
│   │   │   ├── domain/repositories/RegistroRepository.ts
│   │   │   ├── domain/usecases/GetGradesUseCase.ts
│   │   │   ├── data/repositories/RegistroRepositoryImpl.ts
│   │   │   └── presentation/
│   │   │       ├── providers/registroStore.ts
│   │   │       └── screens/RegistroScreen.tsx
│   │   └── configuracion/
│   │       ├── domain/entities/ProfileEntity.ts
│   │       ├── domain/repositories/ConfigRepository.ts
│   │       ├── domain/usecases/GetProfileUseCase.ts
│   │       ├── data/repositories/ConfigRepositoryImpl.ts
│   │       └── presentation/
│   │           ├── providers/configStore.ts
│   │           └── screens/ConfigScreen.tsx
│   └── shared/
│       └── components/
│           ├── AppLayout.tsx
│           └── AppHeader.tsx