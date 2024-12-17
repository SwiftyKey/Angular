export class Habit {
    public name: string;
    public frequency: string;
    public description: string;

    constructor(name: string, frequency: string, description: string) {
        this.name = name;
        this.frequency = frequency;
        this.description = description;
    }
}
