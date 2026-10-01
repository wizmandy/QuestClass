import { colors } from "../theme";

export function RewardBadge(
    { amount, kind }: RewardBadgeProps
) {
    const isXp = kind === "xp";
    return (
        <View style={styles.badge}>
            <Text style={[styles.text, {
                color: isXp ? colors.green : colors.orange
            }]}>
                +{amount} {isXp ? "XP" : "moedas"}
            </Text>
        </View>
    );
}