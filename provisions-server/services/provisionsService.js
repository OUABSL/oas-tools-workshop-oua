export function getprovisions(req, res) {
    res.send([{
        disposal_number : 1,
        province : "Sevilla"      
        }]);
}

export function findBydisposal_number(req, res) {
    res.send({
        disposal_number : 1,
        province : "Sevilla"      
        });
}

