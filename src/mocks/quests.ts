import { Quest } from "../types/domain";

export const quests: Quest[] = [
    {
        id: "goblin-das-props",
        title: "Derrote o Goblin das Props",
        description: "Crie um componente com props tipadas.",
        difficulty: "Média",
        dueDate: "15 ago",
        reward: { xp: 100, coins: 20 },
    },
];