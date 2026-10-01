import { colors } from "../theme";

export default function PlayerHeader() {
    return (
        <View style={styles.profile}>
            <View style={styles.avatarRing}>
                <Image
                    source={require("../../assets/images/lyra.png")}
                    style={styles.avatar}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.titles}>
                <Text style={styles.name}>{player.name}</Text>
                <Text style={styles.characterClass}>
                    {player.characterClass}
                </Text>
            </View>
        </View>
    );
}

<Text style={styles.xp}>
    {player.xp} / {player.nextLevelXp} XP
</Text>
<ProgressBar
    value={player.xp}
    max={player.nextLevelXp}
    color={colors.purple}
    label="Experiência para o próximo nível"
/>

container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
    backgroundColor: colors.surface,
},
row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
},