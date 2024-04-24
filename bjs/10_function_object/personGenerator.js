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
            "id_7": "Михайло",
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
      let middleName = this.randomValue(this.firstNameMaleJson);
      let lastCharacter = middleName.slice(-1);
      let twoLastCharacter = middleName.slice(-2);
      const currentGender = this.person.gender; 
      const genderIdentiti=gender=>this.GENDER_MALE==gender;
        
      if(
          middleName==='Никита'  ||
          middleName==='Аникита' ||
          middleName==='Мина'    ||
          middleName==='Савва'   ||
          middleName==='Сила'    ||
          middleName==='Фока'    
          ){
            middleName = middleName.slice(-middleName.length,-1)+(genderIdentiti(currentGender)?'ич':'ична');
          }
      else if(
            lastCharacter==='ж' ||
            lastCharacter==='ш' ||
            lastCharacter==='ч' ||
            lastCharacter==='щ' ||
            lastCharacter==='ц'
          ){
            middleName+=(genderIdentiti(currentGender)?'eвич':'евна');
          }
      else if(
        lastCharacter==='п' ||
        lastCharacter==='б' ||
        lastCharacter==='ф' ||
        lastCharacter==='в' ||
        lastCharacter==='т' ||
        lastCharacter==='д' ||
        lastCharacter==='с' ||
        lastCharacter==='з' ||
        lastCharacter==='к' ||
        lastCharacter==='г' ||
        lastCharacter==='х' ||
        lastCharacter==='м' ||
        lastCharacter==='н' ||
        lastCharacter==='р' ||
        lastCharacter==='л'){
            middleName+=(genderIdentiti(currentGender)?'ович':'овна');
        }
      else if(
        (lastCharacter==='а'       ||
        lastCharacter==='y'        ||
        lastCharacter==='ы'        ||
        lastCharacter==='о')       && 
        (twoLastCharacter[0]!=='ж' &&
        twoLastCharacter[0]!=='ш'  &&
        twoLastCharacter[0]!=='ч'  &&
        twoLastCharacter[0]!=='щ'  &&
        twoLastCharacter[0]!=='ц')){
          middleName=middleName.slice(-middleName.length,-1)+(genderIdentiti(currentGender)?'ович':'овна');
        }
      else if(
        (lastCharacter==='а'       ||
        lastCharacter==='y'        ||
        lastCharacter==='ы'        ||
        lastCharacter==='о')       && 
        (twoLastCharacter[0]==='ж' ||
        twoLastCharacter[0]==='ш'  ||
        twoLastCharacter[0]==='ч'  ||
        twoLastCharacter[0]==='щ'  ||
        twoLastCharacter[0]==='ц')){
          middleName=middleName.slice(-middleName.length,-1)+(genderIdentiti(currentGender)?'евич':'евна');          
        }
      else if(
        twoLastCharacter==='бь' ||
        twoLastCharacter==='вь' ||
        twoLastCharacter==='гь' ||
        twoLastCharacter==='дь' ||
        twoLastCharacter==='жь' ||
        twoLastCharacter==='зь' ||
        twoLastCharacter==='кь' ||
        twoLastCharacter==='ль' ||
        twoLastCharacter==='мь' ||
        twoLastCharacter==='нь' ||
        twoLastCharacter==='пь' ||
        twoLastCharacter==='рь' ||
        twoLastCharacter==='сь' ||
        twoLastCharacter==='ть' ||
        twoLastCharacter==='фь' ||
        twoLastCharacter==='хь' ||
        twoLastCharacter==='ць' ||
        twoLastCharacter==='чь' ||
        twoLastCharacter==='шь' ||
        lastCharacter==='е'     ||
        twoLastCharacter==='ея' ||
        twoLastCharacter==='ия' ||
        twoLastCharacter==='ай' ||
        twoLastCharacter==='яй' ||
        twoLastCharacter==='ей' ||
        twoLastCharacter==='эй' ||
        twoLastCharacter==='ый' ||
        twoLastCharacter==='ой' ||
        twoLastCharacter==='уй' ||
        twoLastCharacter==='юй'){
          middleName=middleName.slice(-middleName.length,-1)+(genderIdentiti(currentGender)?'евич':'евна');          
        }
      else if(lastCharacter==='и'){
          middleName+=(genderIdentiti(currentGender)?'евич':'евна');          
        }
      else if(twoLastCharacter==='ий'){
          middleName = middleName.slice(-middleName.length,-1);
          const twoLast = middleName.slice(-2);
          let flag = false;
          const consonants = "бвгджзйклмнпрстфхцчшщ";
          for (let i = 0; i < consonants.length; i++) {
              for (let j = i + 1; j < consonants.length; j++) {
                  const pair1 = consonants[i] + consonants[j];
                  const pair2 = consonants[j] + consonants[i];
                  if(pair1!=='нт' && pair2!=='тн'){
                    if (pair1 === middleName.slice(-3,-1) || pair2 ===  middleName.slice(-3,-1)) {
                        flag = true;
                    }
                }
              }
          }

          if(
            twoLast[0]==='к' ||
            twoLast[0]==='х' ||
            twoLast[0]==='ц' ||
            flag){
              middleName+=(genderIdentiti(currentGender)?'евич':'евна');
            }
          else{
            middleName[middleName.length-1]='ь';
            middleName+=(genderIdentiti(currentGender)?'евич':'евна')
          }
        }
      else if(
        twoLastCharacter==='аа' ||
        twoLastCharacter==='ау' ||
        twoLastCharacter==='еу' ||
        twoLastCharacter==='ээ' ||
        twoLastCharacter==='ии' ||
        twoLastCharacter==='уу'){
          middleName+=(genderIdentiti(currentGender)?'евич':'евна');
        }

      return middleName;
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
