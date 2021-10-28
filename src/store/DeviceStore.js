import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id:1, name: "Iphone 12 pro", rating: 5, price: 2500, img: 'https://www.apple.com'},
            {id:1, name: "Iphone 12 pro", rating: 5, price: 2500, img: 'https://www.apple.com'},
            {id:1, name: "Iphone 12 pro", rating: 5, price: 2500, img: 'https://www.apple.com'},
            {id:1, name: "Iphone 12 pro", rating: 5, price: 2500, img: 'https://www.apple.com'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

}