export interface MatrixEvent {
    room_id: string;
    type: string;
    state_key?: string | undefined;
    sender: string;
    origin_server_ts: number;
    original_authorized_sending_server?: string | undefined;
    authorized_sending_server?: string | undefined;
    content: Record<string, any>;
    hashes: {
        sha256: string;
    };
    signatures: {
        [domain: string]: {
            [keyId: string]: string;
        };
    };
}

export interface V4PDU extends MatrixEvent {
    auth_events: string[];
    depth: number;
    prev_events: string[];
}
