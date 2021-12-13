package ua.lviv.iot.helicoptersbackend.model;

import lombok.*;
import ua.lviv.iot.helicoptersbackend.model.enums.PoolType;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Pool {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Integer valueOfWater;

    private Integer maxAmount;

    @Enumerated(EnumType.STRING)
    private PoolType type;
    
    private Integer value;
}
