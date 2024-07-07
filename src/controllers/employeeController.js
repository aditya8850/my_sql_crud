import connection from '../models/db.js';

export const getEmployees = (req, res) => {
  connection.query('SELECT * FROM employees', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const getEmployeeById = (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM employees WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
};

export const createEmployee = (req, res) => {
  const { name, position, salary } = req.body;
  connection.query('INSERT INTO employees (name, position, salary) VALUES (?, ?, ?)', [name, position, salary], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ id: results.insertId, name, position, salary });
  });
};

export const updateEmployee = (req, res) => {
  const { id } = req.params;
  const { name, position, salary } = req.body;
  connection.query('UPDATE employees SET name = ?, position = ?, salary = ? WHERE id = ?', [name, position, salary, id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ id, name, position, salary });
  });
};

export const deleteEmployee = (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM employees WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Employee deleted successfully' });
  });
};
