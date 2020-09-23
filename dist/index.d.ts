export interface IOptions {
    selector: string;
    hiddenInputId: string;
    fillRecievedValue: boolean;
    filledClass?: string;
    debug?: boolean;
}
export declare class SinChar {
    private digits;
    private resultingPassInput;
    private filledPass;
    private recievedPass;
    private isFilled;
    private fillRecieved;
    private debugMode?;
    private filledClass?;
    constructor(options: IOptions);
    processCodeInput(cb?: Function): void;
}
