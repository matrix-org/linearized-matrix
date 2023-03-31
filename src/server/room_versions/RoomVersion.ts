import {MatrixEvent} from "../models/event";
import {KeyStore} from "../KeyStore";

export interface RoomVersion {
    /**
     * Checks the required schema and performs signature validations on the event,
     * throwing an error if any of the checks fail.
     *
     * Operates asynchronously.
     * @param event The event to validate.
     * @param keyStore The running key store instance
     */
    checkValidity(event: MatrixEvent, keyStore: KeyStore): Promise<void>;
    /**
     * Checks if an event is allowed by the authorization rules for the room version,
     * given the room as a linearized DAG (index 0 should the create event if not
     * validating the create event itself). Throws if there's an auth error (permissions,
     * illegal state, etc).
     * @param event The event to validate.
     * @param allEvents The events which have already been accepted, ordered.
     */
    checkAuth(event: MatrixEvent, allEvents: MatrixEvent[]): void;
    redact(event: MatrixEvent | Omit<MatrixEvent, "signatures">): object;
}
