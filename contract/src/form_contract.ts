import { NearBindgen, near, call, view, UnorderedMap } from 'near-sdk-js';

@NearBindgen({})
export class FormContract {
    records: UnorderedMap<unknown>;

    constructor() {
        this.records = new UnorderedMap("1");
    }

    @call({})
    set_message(message: string): void {
        let account_id = near.signerAccountId();
        near.log(`${account_id} set_status with message ${message}`);
        this.records.set(account_id, message);
    }

    @view({})
    get_status(account_id: string) {
      near.log(`get_status for account_id ${account_id}`);
      return this.records.get(account_id);
    }
}
