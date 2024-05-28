const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/add-tranche', (req, res) => {
    const newEntry = req.body;

    fs.readFile(path.join(__dirname, 'src', 'components', 'MOCK_DATA.json'), 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return res.status(500).json({ success: false, message: 'Error reading file' });
        }

        const mockData = JSON.parse(data);
        mockData.push(newEntry);

        fs.writeFile(path.join(__dirname, 'src', 'components', 'MOCK_DATA.json'), JSON.stringify(mockData, null, 2), (err) => {
            if (err) {
                console.log('Error writing file:', err);
                return res.status(500).json({ success: false, message: 'Error writing file' });
            }

            res.json({ success: true, message: 'Tranche added successfully' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
