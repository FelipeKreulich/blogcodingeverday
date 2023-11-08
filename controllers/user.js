import { db } from "../db.js";

export const getUsers = (_req, res) => {
  const q = "SELECT * from users";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getUser = (req, res) => {
  const q = "SELECT username, img FROM users WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};