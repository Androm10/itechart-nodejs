export default interface IBroker {
    
    subscribe(queue: string): Promise<void>;
    unsubscribe(queue: string): void;
    setHandler(handler: (msg: any) => any ): void;

}