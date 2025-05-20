import { Href, Slot, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function ProfileLayout() {
  const router = useRouter();

  const handlePress = (path: Href) => {
    router.replace(path);
  };

  return (
    <View>
      <View>
        <Text>프로필</Text>
      </View>

      <View>
        <View>
          <Pressable onPress={() => handlePress('/profile/achivements')}>
            <Text>업적</Text>
          </Pressable>
          <Pressable onPress={() => handlePress('/profile/badges')}>
            <Text>배지</Text>
          </Pressable>
          <Pressable onPress={() => handlePress('/profile/statistics')}>
            <Text>통계</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Slot />
      </View>
    </View>
  );
}
