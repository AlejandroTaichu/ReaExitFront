export class Ticket {
    userId: number = 0;
    ticketTitle: string = '';
    ticketDescription:string = '';
    ticketStatus: TicketStatus =0;
}

export enum TicketStatus {
    Opened,
    Closed
}
