const EntrySchema = {
  name: 'Entry',
  properties: {
    id: 'string',
    title: 'string',
    noteText: 'string',
    date: 'string',
  },
  primaryKey: 'id',
};

export default EntrySchema;
