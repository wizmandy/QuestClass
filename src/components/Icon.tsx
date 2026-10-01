import { Image } from "expo-image";
type IconProps = { name: keyof typeof icons };

export function Icon({ name }: IconProps) {
    const icon = icons[name];
    return (
        <Image
            source={icon.source}
            style={{ width: icon.size, height: icon.size }}
            contentFit="contain"
            accessible={false}
        />
    );
}