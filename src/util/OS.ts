import * as os from "os";

/**
 * OS related items
 * @export
 * @class OS
 */
export class OS {

    /**
     * Return OS type
     * @static
     * @returns {string} 
     * @memberof OS
     */
    public static getOs(): string {
        return os.type();
    }
}
