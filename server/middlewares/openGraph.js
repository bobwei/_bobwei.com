export default function() {
  return (req, res, next) => {
    // let splitPath = req.baseUrl.split('/');
    // let objectType = splitPath[1];
    // let objectId = splitPath[2];
    let baseUrl = req.protocol + '://' + req.get('host');
    req.openGraph = {
      type: 'website',
      title: 'Bob Wei ( 韋伯俞 )',
      description: 'Linkwish 共同創辦人、創業家與程式設計師，致力於打造令人驚艷的產品。',
      image: `${baseUrl}/assets/cover-photo.jpg`
    };
    next();
  };
}
