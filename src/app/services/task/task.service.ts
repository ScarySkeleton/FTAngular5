import { Injectable } from "@angular/core";

@Injectable()
export class TaskService {
    readonly factor = 1000;

    constructor() {}

    getTask() {
        return {
            id: Math.random() * this.factor,
            name: "Learning Angular",
            process: "takoe"
        }
    }

    getTasks() {
        return [
            {
                id: Math.random() * this.factor,
                name: "Learn ngrx - redux in Angular",
                process: "nenachato"

            },
            {
                id: Math.random() * this.factor,
                name: "Learn react routing",
                process: "Probuval sam - ne polychilos, nygno smortet vidos"
            },
            {
                id: Math.random() * this.factor,
                name: "rx-js learning",
                process: 0
            }
        ]
    }
}