import * as service from '../services/provisionsService.js';

export function getprovisions(req, res) {
    service.getprovisions(req, res);
}

export function findBydisposal_number(req, res) {
    service.findBydisposal_number(req, res);
}

