import * as os from "os";

export class OS {
    public static getOs(): string {

        return os.type();
    }
}
