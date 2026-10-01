import { StyleSheet } from "react-native";
import { colors } from "../theme";

type ProgressBarProps = {
    value: number;
    max: number;
    color: string;
    label: string;
};

const percentage = max > 0
    ? Math.min(100, Math.max(0, (value / max) * 100))
    : 0;

<View style={styles.track}>
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

const styles = StyleSheet.create({
    track: {
        height: 10,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: colors.background,
    },
    fill: { height: "100%" },
});