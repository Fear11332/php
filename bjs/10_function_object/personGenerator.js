const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFamaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Виктория",
            "id_3": "Ксения",
            "id_4": "Анастасия",
            "id_5": "Ирина",
            "id_6": "Елена",
            "id_7": "Дарья",
            "id_8": "Ксения",
            "id_9": "Юлия",
            "id_10": "Александра"
        }
    }`,

    maleMiddleName: `{  
        "count": 15,
        "list": {
            "id_1": "Иванович",
            "id_2": "Алексеевич",
            "id_3": "Дмитриевич",
            "id_4": "Николаевич",
            "id_5": "Владимирович",
            "id_6": "Сергеевич",
            "id_7": "Андреевич",
            "id_8": "Михайлович",
            "id_9": "Александрович",
            "id_10": "Павлович",
            "id_11": "Васильевич",
            "id_12": "Артемович",
            "id_13": "Егорович",
            "id_14": "Федорович",
            "id_15": "Тимофеевич"
        }
    }`,

    
    famaleMiddleName: `{  
        "count": 15,
        "list": {
            "id_1": "Августовна",
            "id_2": "Батьковна",
            "id_3": "Аркадьевна",
            "id_4": "Ахматовна",
            "id_5": "Гавриловна",
            "id_6": "Вадимовна",
            "id_7": "Валентиновна",
            "id_8": "Борисовна",
            "id_9": "Валерьевна",
            "id_10": "Вениаминовна",
            "id_11": "Викторовна",
            "id_12": "Генриховна",
            "id_13": "Григорьевна",
            "id_14": "Никитична",
            "id_15": "Афанасьевна",
            "id_16": "Игоревна"
        }
    }`,

    famaleProfession: `{  
        "count": 15,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Воспитательница",
            "id_3": "Педагог",
            "id_4": "Актриса",
            "id_5": "Стюардесса",
            "id_6": "Маникюрша",
            "id_7": "Массажистка",
            "id_8": "Психолог",
            "id_9": "Врач",
            "id_10": "Дизайнер",
            "id_11": "Модель",
            "id_12": "Косметолог",
            "id_13": "Повар",
            "id_14": "Флорист",
            "id_15": "Маникюрша"
        }
    }`,

    maleProfession: `{  
        "count": 15,
        "list": {
            "id_1": "Инженер",
            "id_2": "Доктор",
            "id_3": "Программист",
            "id_4": "Учитель",
            "id_5": "Актер",
            "id_6": "Пожарный",
            "id_7": "Пилот",
            "id_8": "Полицейский",
            "id_9": "Врач",
            "id_10": "Исследователь",
            "id_11": "Механик",
            "id_12": "Шеф-повар",
            "id_13": "Инженер-строитель",
            "id_14": "Фермер",
            "id_15": "Биолог"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        return this.randomValue(this.person.gender===this.GENDER_MALE?
            this.firstNameMaleJson:this.firstNameFamaleJson);
    },


     randomSurname: function() {
        let surname = this.randomValue(this.surnameJson);
        return (this.person.gender===this.GENDER_MALE)?surname:surname+'a';
    },

    randomGender: function (){
        return (this.randomIntNumber()===1)?this.GENDER_MALE:this.GENDER_FEMALE;
    },

    randomMiddleName: function(){
        return this.randomValue((this.person.gender===this.GENDER_MALE)?
        this.maleMiddleName
        :this.famaleMiddleName);
    },

    randomProfession: function(){
        return this.randomValue((this.person.gender===this.GENDER_MALE)?
        this.maleProfession
        :this.famaleProfession);
    },

    randomDateOfBirth: function(){
            let year = this.randomIntNumber(2024, 1900);
            
            let daysInMonth = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 
                              this.randomIntNumber(30, 29) : 
                              this.randomIntNumber() == 0 ? 30 : 28;
        
            let day = daysInMonth == 30 ? this.randomIntNumber(30, 1) : 
                      daysInMonth == 29 ? this.randomIntNumber(29, 1) : 
                      this.randomIntNumber(28, 1);
        
            let month;
            switch (daysInMonth) {
                case 30:
                    let tmp = this.randomIntNumber(4, 1);
                    month = tmp === 1 ? 'апреля' : 
                            tmp === 2 ? 'июня' : 
                            tmp === 3 ? 'сентября' : 'ноября';
                    break;
                case 29:
                case 28:
                    month = 'февраля';
                    break;
        };
        
        return day + 'го ' + month + ' ' + year + ' года рождения';
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.middleName = this.randomMiddleName();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
