class Student {
    constructor(stt, name, address, age, avatar, audio) {
        this._stt = stt;
        this._name = name;
        this._address = address;
        this._age = age;
        this._avatar = avatar;
        this._audio = audio;
    }


    get id() {
        return this._stt;
    }

    get name() {
        return this._name;
    }

    set id(value) {
        this._stt = value;
    }

    set name(value) {
        this._name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get avatar() {
        return this._avatar;
    }

    set avatar(value) {
        this._avatar = value;
    }

    get audio() {
        return this._audio;
    }

    set audio(value) {
        this._audio = value;
    }
}