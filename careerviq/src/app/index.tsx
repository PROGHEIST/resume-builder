import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/AppButton';
import { AppCard } from '@/components/AppCard';
import { AppHeader } from '@/components/AppHeader';
import { colors, radius, spacing } from '@/constants/theme';
import { useResumeStore } from '@/store/resumeStore';

const steps = [
  { number: '01', title: 'Add your details', caption: 'Start with your contact information and summary.' },
  { number: '02', title: 'Make it yours', caption: 'Organize your experience, education, and skills.' },
  { number: '03', title: 'Export and share', caption: 'Create a clean PDF when your resume is ready.' },
];

export default function HomeScreen() {
  const resumes = useResumeStore((state) => state.resumes);
  const latestResume = resumes[0];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader eyebrow="YOUR CAREER, CLEARLY" title="CareerViQ" subtitle="Make your next move count." />
        <View style={styles.hero}>
          <View style={styles.glow} />
          <View style={styles.badge}><Text style={styles.badgeText}>✦  CAREER TOOLKIT</Text></View>
          <Text style={styles.heroTitle}>A resume that{"\n"}opens doors.</Text>
          <Text style={styles.heroBody}>Build a polished, professional resume in minutes. Your information stays on your device.</Text>
          <AppButton title="Create my resume" icon="＋" onPress={() => router.push('/resume/edit')} />
          <View style={styles.heroFooter}><View style={styles.dot} /><Text style={styles.heroFooterText}>Free to start · No account required</Text></View>
        </View>

        <View style={styles.sectionHeading}>
          <View><Text style={styles.eyebrow}>WORKSPACE</Text><Text style={styles.sectionTitle}>Your resumes</Text></View>
          <Text style={styles.count}>{resumes.length} saved</Text>
        </View>

        {latestResume ? (
          <AppCard style={styles.resumeCard}>
            <View style={styles.resumeIcon}><Text style={styles.resumeIconText}>▤</Text></View>
            <View style={styles.resumeDetails}>
              <Text style={styles.resumeTitle}>{latestResume.title || 'Untitled resume'}</Text>
              <Text style={styles.resumeSubtitle}>Updated {new Date(latestResume.updatedAt).toLocaleDateString()}</Text>
            </View>
            <AppButton title="Edit" variant="secondary" size="small" onPress={() => router.push({ pathname: '/resume/edit', params: { id: latestResume.id } })} />
          </AppCard>
        ) : (
          <AppCard style={styles.emptyCard}>
            <View style={styles.emptyIcon}><Text style={styles.emptyIconText}>▤</Text></View>
            <Text style={styles.emptyTitle}>Your next opportunity starts here</Text>
            <Text style={styles.emptyBody}>Your saved resumes will appear here. Start with a few simple details.</Text>
            <AppButton title="Start a resume" variant="outline" onPress={() => router.push('/resume/edit')} />
          </AppCard>
        )}

        <View style={styles.sectionHeading}><View><Text style={styles.eyebrow}>GET STARTED</Text><Text style={styles.sectionTitle}>A simple process</Text></View></View>
        {steps.map((step) => (
          <AppCard key={step.number} style={styles.stepCard}>
            <View style={styles.stepNumber}><Text style={styles.stepNumberText}>{step.number}</Text></View>
            <View style={styles.stepBody}><Text style={styles.stepTitle}>{step.title}</Text><Text style={styles.stepCaption}>{step.caption}</Text></View>
          </AppCard>
        ))}
        <View style={styles.privacyNote}><Text style={styles.privacySymbol}>◈</Text><View style={styles.privacyText}><Text style={styles.privacyTitle}>Your details stay yours</Text><Text style={styles.privacyBody}>CareerViQ stores your resume locally and does not connect to a server.</Text></View></View>
        <Text style={styles.footer}>CAREERVIQ · RESUME BUILDER</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: spacing.lg, paddingTop: spacing.sm, paddingBottom: spacing.xxl, gap: spacing.md, maxWidth: 760, width: '100%', alignSelf: 'center' },
  hero: { overflow: 'hidden', backgroundColor: colors.navy, borderRadius: radius.xl, padding: spacing.xl, gap: spacing.md, marginTop: spacing.sm },
  glow: { position: 'absolute', right: -66, top: -82, height: 230, width: 230, borderRadius: 120, backgroundColor: colors.blueGlow, opacity: 0.48 },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 11, paddingVertical: 7, backgroundColor: 'rgba(255,255,255,0.11)', borderRadius: radius.pill },
  badgeText: { color: '#DAE8FF', fontSize: 10, letterSpacing: 1, fontWeight: '700' },
  heroTitle: { color: colors.white, fontSize: 33, lineHeight: 39, fontWeight: '800', letterSpacing: -0.8 },
  heroBody: { color: '#D5E0F1', fontSize: 14, lineHeight: 23, maxWidth: 440 },
  heroFooter: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 2 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#73E0B6' },
  heroFooterText: { fontSize: 12, color: '#D5E0F1' },
  sectionHeading: { marginTop: spacing.md, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
  eyebrow: { color: colors.blue, fontSize: 10, letterSpacing: 1.5, fontWeight: '800', marginBottom: 5 },
  sectionTitle: { color: colors.ink, fontSize: 21, fontWeight: '800', letterSpacing: -0.4 },
  count: { color: colors.muted, fontSize: 12, marginBottom: 3 },
  emptyCard: { alignItems: 'flex-start', gap: spacing.sm },
  emptyIcon: { width: 43, height: 43, borderRadius: 13, backgroundColor: colors.blueSoft, alignItems: 'center', justifyContent: 'center' },
  emptyIconText: { color: colors.blue, fontSize: 21, fontWeight: '700' },
  emptyTitle: { color: colors.ink, fontSize: 16, fontWeight: '800' },
  emptyBody: { color: colors.muted, fontSize: 13, lineHeight: 20 },
  resumeCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  resumeIcon: { width: 44, height: 44, borderRadius: 13, backgroundColor: colors.blueSoft, alignItems: 'center', justifyContent: 'center' },
  resumeIconText: { fontSize: 21, color: colors.blue },
  resumeDetails: { flex: 1, gap: 4 },
  resumeTitle: { color: colors.ink, fontSize: 14, fontWeight: '800' },
  resumeSubtitle: { color: colors.muted, fontSize: 11 },
  stepCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.md },
  stepNumber: { width: 35, height: 35, borderRadius: 12, backgroundColor: colors.blueSoft, alignItems: 'center', justifyContent: 'center' },
  stepNumberText: { color: colors.blue, fontSize: 11, fontWeight: '800' },
  stepBody: { flex: 1, gap: 4 },
  stepTitle: { color: colors.ink, fontSize: 14, fontWeight: '800' },
  stepCaption: { color: colors.muted, fontSize: 12, lineHeight: 18 },
  privacyNote: { flexDirection: 'row', gap: spacing.sm, padding: spacing.md, backgroundColor: colors.mintSoft, borderRadius: radius.lg, marginTop: spacing.sm },
  privacySymbol: { color: colors.mint, fontSize: 22 },
  privacyText: { flex: 1, gap: 4 },
  privacyTitle: { color: colors.ink, fontSize: 13, fontWeight: '800' },
  privacyBody: { color: colors.muted, fontSize: 12, lineHeight: 18 },
  footer: { color: colors.faint, fontSize: 9, fontWeight: '700', letterSpacing: 1.4, textAlign: 'center', marginTop: spacing.md },
});