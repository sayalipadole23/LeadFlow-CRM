
package com.leadflow.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.leadflow.backend.entity.Lead;

public interface LeadRepository extends JpaRepository<Lead, Long> {

}
