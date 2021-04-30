import Realm from 'realm';

import EntrySchema from './Schemas/EntrySchema';

async function getRealm() {
  const realm = await Realm.open({
    schema: [EntrySchema],
    schemaVersion: 1,
  });

  return realm;
}

export default getRealm;
