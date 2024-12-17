export class Model {
    title: string;
    items: EmployeeItem[];
    constructor() {
        this.title = 'Список сотрудников университета КГУ';
        this.items = [
            new EmployeeItem('Медведев А.А., доцент кафедры', 'C:/Users/Swifty/Downloads/ВУЗ/Web/Лабы/Lab4/src/assetsMedvedev.jpg'),
            new EmployeeItem('Черепанов О.С., доцент кафедры', 'assets/Cherepanov.jpg'),
            new EmployeeItem('Волк В.К., доцент кафедры', 'assets/Volk.jpg'),
        ];
    }
}

export class EmployeeItem {
    public title: string;
    public image: string;

    constructor(title: string, image: string) {
        this.title = title;
        this.image = image;
    }
}
