import { StyleSheet, View } from "react-native";
import { colors } from "../theme";

type ProgressBarProps = {
    value: number;
    max: number;
    color: string;
    label: string;
};

export function ProgressBar({
    value,
    max,
    color,
    label,
}: ProgressBarProps) {
    const percentage =
        max > 0
            ? Math.min(100, Math.max(0, (value / max) * 100))
            : 0;

    return (
        <View
            style={styles.track}
            accessible
            accessibilityRole="progressbar"
            accessibilityLabel={label}
            accessibilityValue={{
                min: 0,
                max: 100,
                now: percentage,
            }}
        >
            <View
                style={[
                    styles.fill,
                    {
                        width: `${percentage}%`,
                        backgroundColor: color,
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    track: {
        height: 10,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: colors.background,
    },
    fill: { 
        height: "100%" 
    },
});