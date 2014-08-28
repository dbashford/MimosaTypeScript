// An excerpt from the linkedin-dust d.ts file


declare module "templates" {


    export interface Context {
        /**
        * Retrieves the value at key from the context stack.
        */
        get (key: string): any;

        /**
        * Pushes an arbitrary value onto the context stack and returns a new context instance. Specify index and/or length to enable enumeration helpers.
        */
        push(head: any, idx?: number, len?: number): Context;

        /**
        * Returns a new context instance consisting only of the value at head, plus any previously defined global object.
        */
        rebase(head: any): Context;

        /**
        * Returns the head of the context stack.
        */
        current(): any;
    }

    export function render(name: string, context: any, callback: (err: any, out: string) => any);
    export function render(name: string, context: Context, callback: (err: any, out: string) => any);
}