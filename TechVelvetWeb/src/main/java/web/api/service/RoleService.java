package web.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import web.api.entity.Role;
import web.api.repository.RoleRepository;

@AllArgsConstructor
@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public List<Role> findAll() {
        return (List<Role>)roleRepository.findAll();
    }
    public Role findById(int id) {
        return roleRepository.findById(id);
    }
    public Role save(Role role) {
        return roleRepository.save(role);
    }

//    public List<Role> findAllById(List<Integer> rolesId) { return (List<Role>)roleRepository.findAllById(rolesId); }
}
