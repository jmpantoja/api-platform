import type {NextApiRequest, NextApiResponse} from 'next'
import {backend} from "@planb/provider/dataProvider";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  backend(req)
    .then(({status, data}) => {
      res
        .status(status)
        .json(data)
    })
    .catch(({status, data}) => {
      res
        .status(status)
        .json(data)
    })
}
