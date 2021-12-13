package ua.lviv.iot.helicoptersbackend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.helicoptersbackend.model.Pool;
import ua.lviv.iot.helicoptersbackend.model.enums.PoolType;
import ua.lviv.iot.helicoptersbackend.service.PoolService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("/pools")
public class PoolController {

    private final PoolService poolService;

    @GetMapping
    public List<Pool> getAllPools(final @RequestParam(value = "filters", required = false) String[] filters) {
        if (filters != null) {
            return filters.length != 0 ? poolService.getPools(filters) : poolService.getAllPools();
        }
        return poolService.getAllPools();
    }

    @GetMapping("/types")
    public PoolType[] getAllPoolTypes() {
        return PoolType.values();
    }

    @PostMapping
    public Pool createPool(final @RequestBody Pool pool) {
        return poolService.createPool(pool);
    }

    @PutMapping
    public Pool updatePool(final @RequestBody Pool pool) {
        return poolService.updatePool(pool);
    }

    @DeleteMapping("/{id}")
    public void deletePool(final @PathVariable("id") Integer id) {
        poolService.deletePool(id);
    }
}
