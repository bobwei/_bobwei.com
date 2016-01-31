import Parse from 'parse';


export function createContact(data) {
  return () => {
    return (new Parse.Object('Contact'))
      .save(data);
  };
}
