type MissionCardProps = {
    quest: Quest;
    onPress: () => void;
};
export function MissionCard(
    { quest, onPress }: MissionCardProps
) {
    return (
        <Pressable onPress={onPress}
            style={({ pressed })} => [
                styles.card, pressed && styles.pressed
            ]}>
            {/* Cabeçalho, divisor e recompensas */}
        </Pressable>
    );
}