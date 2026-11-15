
package com.leadflow.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leadflow.backend.entity.Lead;
import com.leadflow.backend.service.LeadService;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "http://localhost:3000"
})
public class LeadController {

    private final LeadService leadService;

    // Constructor injection
    public LeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    // 1. Add a new lead
    @PostMapping
    public ResponseEntity<Lead> createLead(@RequestBody Lead lead) {

        Lead savedLead = leadService.createLead(lead);

        return new ResponseEntity<>(savedLead, HttpStatus.CREATED);
    }

    // 2. Get all leads
    @GetMapping
    public ResponseEntity<List<Lead>> getAllLeads() {

        List<Lead> leads = leadService.getAllLeads();

        return ResponseEntity.ok(leads);
    }

    // 3. Get lead by ID
    @GetMapping("/{id}")
    public ResponseEntity<Lead> getLeadById(@PathVariable Long id) {

        Lead lead = leadService.getLeadById(id);

        return ResponseEntity.ok(lead);
    }

    // 4. Update existing lead
    @PutMapping("/{id}")
    public ResponseEntity<Lead> updateLead(
            @PathVariable Long id,
            @RequestBody Lead lead) {

        Lead updatedLead = leadService.updateLead(id, lead);

        return ResponseEntity.ok(updatedLead);
    }

    // 5. Delete lead
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLead(@PathVariable Long id) {

        leadService.deleteLead(id);

        return ResponseEntity.noContent().build();
    }
}
