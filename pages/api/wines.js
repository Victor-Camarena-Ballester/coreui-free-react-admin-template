export default function handler(req, res) {
    res.status(200).json([{ name: 'Pinot' },{ name: 'Merlot' }, { name: 'Sauvignon' }])
  }