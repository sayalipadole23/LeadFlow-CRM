
package com.leadflow.backend.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.leadflow.backend.entity.Lead;
import com.leadflow.backend.repository.LeadRepository;

@Service
public class LeadService {

    private final LeadRepository leadRepository;

    // Constructor injection
    public LeadService(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    // 1. Add a new lead
    public Lead createLead(Lead lead) {

        if (lead.getStatus() == null || lead.getStatus().isBlank()) {
            lead.setStatus("New");
        }

        return leadRepository.save(lead);
    }

    // 2. Get all leads
    public List<Lead> getAllLeads() {

        return leadRepository.findAll();
    }

    // 3. Get lead by ID
    public Lead getLeadById(Long id) {

        return leadRepository.findById(id)
                .orElseThrow(() ->
                    new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Lead not found with ID: " + id
                    )
                );
    }

    // 4. Update an existing lead
    public Lead updateLead(Long id, Lead updatedLead) {

        Lead existingLead = getLeadById(id);

        existingLead.setName(updatedLead.getName());
        existingLead.setEmail(updatedLead.getEmail());
        existingLead.setPhone(updatedLead.getPhone());
        existingLead.setCompany(updatedLead.getCompany());
        existingLead.setSource(updatedLead.getSource());
        existingLead.setStatus(updatedLead.getStatus());

        return leadRepository.save(existingLead);
    }

    // 5. Delete a lead
    public void deleteLead(Long id) {

        Lead existingLead = getLeadById(id);

        leadRepository.delete(existingLead);
    }
}
